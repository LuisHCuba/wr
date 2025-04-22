/*
  # Complete Database Schema

  1. Tables
    - `profiles`
      - Stores user profiles and access control
      - `id` (uuid): References auth.users.id
      - `email` (text): User's email
      - `full_name` (text): User's full name
      - `role` (text): User's role (admin, staff, client)
      - `created_at` (timestamp): Profile creation date
      - `updated_at` (timestamp): Last update date

    - `locations`
      - Stores service locations/branches
      - `id` (uuid): Primary key
      - `name` (text): Location name
      - `address` (text): Physical address
      - `created_at` (timestamp): Creation date

    - `services`
      - Available beauty services
      - `id` (uuid): Primary key
      - `name` (text): Service name
      - `description` (text): Service details
      - `duration` (integer): Service duration in minutes
      - `price` (integer): Price in cents
      - `created_at` (timestamp): Creation date

    - `working_hours`
      - Staff availability schedule
      - `id` (uuid): Primary key
      - `location_id` (uuid): References locations.id
      - `staff_id` (uuid): References profiles.id (staff only)
      - `day_of_week` (integer): Day of week (0-6)
      - `start_time` (time): Shift start time
      - `end_time` (time): Shift end time
      - `created_at` (timestamp): Creation date

    - `bookings`
      - Service appointments
      - `id` (uuid): Primary key
      - `client_id` (uuid): References profiles.id (client)
      - `service_id` (uuid): References services.id
      - `staff_id` (uuid): References profiles.id (staff)
      - `location_id` (uuid): References locations.id
      - `start_time` (timestamp): Appointment start
      - `end_time` (timestamp): Appointment end
      - `status` (text): Booking status
      - `created_at` (timestamp): Creation date

  2. Security
    - Enable RLS on all tables
    - Role-based access control through profiles
    - Specific policies for each user role
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  full_name text,
  role text NOT NULL DEFAULT 'client' CHECK (role IN ('admin', 'staff', 'client')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

COMMENT ON TABLE profiles IS 'User profiles with role-based access control';
COMMENT ON COLUMN profiles.id IS 'References auth.users.id';
COMMENT ON COLUMN profiles.email IS 'User email address';
COMMENT ON COLUMN profiles.full_name IS 'User full name';
COMMENT ON COLUMN profiles.role IS 'Access control role: admin, staff, or client';
COMMENT ON COLUMN profiles.created_at IS 'Profile creation timestamp';
COMMENT ON COLUMN profiles.updated_at IS 'Profile last update timestamp';

-- Create locations table
CREATE TABLE locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  created_at timestamptz DEFAULT now()
);

COMMENT ON TABLE locations IS 'Service locations and branches';
COMMENT ON COLUMN locations.name IS 'Location name';
COMMENT ON COLUMN locations.address IS 'Physical address';

-- Create services table
CREATE TABLE services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  duration integer NOT NULL,
  price integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

COMMENT ON TABLE services IS 'Available beauty services';
COMMENT ON COLUMN services.name IS 'Service name';
COMMENT ON COLUMN services.description IS 'Service description';
COMMENT ON COLUMN services.duration IS 'Service duration in minutes';
COMMENT ON COLUMN services.price IS 'Service price in cents';

-- Create working_hours table
CREATE TABLE working_hours (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  location_id uuid REFERENCES locations(id) ON DELETE CASCADE,
  staff_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  day_of_week integer NOT NULL CHECK (day_of_week BETWEEN 0 AND 6),
  start_time time NOT NULL,
  end_time time NOT NULL,
  created_at timestamptz DEFAULT now()
);

COMMENT ON TABLE working_hours IS 'Staff availability schedule';
COMMENT ON COLUMN working_hours.location_id IS 'Associated location';
COMMENT ON COLUMN working_hours.staff_id IS 'Associated staff member';
COMMENT ON COLUMN working_hours.day_of_week IS 'Day of week (0=Sunday to 6=Saturday)';
COMMENT ON COLUMN working_hours.start_time IS 'Shift start time';
COMMENT ON COLUMN working_hours.end_time IS 'Shift end time';

-- Create bookings table
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  service_id uuid REFERENCES services(id) ON DELETE CASCADE,
  staff_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  location_id uuid REFERENCES locations(id) ON DELETE CASCADE,
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at timestamptz DEFAULT now()
);

COMMENT ON TABLE bookings IS 'Service appointments';
COMMENT ON COLUMN bookings.client_id IS 'Client who booked the service';
COMMENT ON COLUMN bookings.service_id IS 'Booked service';
COMMENT ON COLUMN bookings.staff_id IS 'Staff member performing the service';
COMMENT ON COLUMN bookings.location_id IS 'Service location';
COMMENT ON COLUMN bookings.start_time IS 'Appointment start time';
COMMENT ON COLUMN bookings.end_time IS 'Appointment end time';
COMMENT ON COLUMN bookings.status IS 'Booking status';

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE working_hours ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Admins can manage all profiles"
  ON profiles FOR ALL
  USING (auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin'))
  WITH CHECK (auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin'));

CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile except role"
  ON profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id AND role = OLD.role);

-- Locations policies
CREATE POLICY "Anyone can view locations"
  ON locations FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Admins can manage locations"
  ON locations FOR ALL
  USING (auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin'))
  WITH CHECK (auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin'));

-- Services policies
CREATE POLICY "Anyone can view services"
  ON services FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Admins can manage services"
  ON services FOR ALL
  USING (auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin'))
  WITH CHECK (auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin'));

-- Working hours policies
CREATE POLICY "Anyone can view working hours"
  ON working_hours FOR SELECT
  TO PUBLIC
  USING (true);

CREATE POLICY "Admins can manage working hours"
  ON working_hours FOR ALL
  USING (auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin'))
  WITH CHECK (auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin'));

-- Bookings policies
CREATE POLICY "Admins can manage all bookings"
  ON bookings FOR ALL
  USING (auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin'))
  WITH CHECK (auth.uid() IN (SELECT id FROM profiles WHERE role = 'admin'));

CREATE POLICY "Staff can view and manage their bookings"
  ON bookings FOR ALL
  USING (auth.uid() = staff_id AND auth.uid() IN (SELECT id FROM profiles WHERE role = 'staff'))
  WITH CHECK (auth.uid() = staff_id AND auth.uid() IN (SELECT id FROM profiles WHERE role = 'staff'));

CREATE POLICY "Clients can view their bookings"
  ON bookings FOR SELECT
  USING (auth.uid() = client_id);

CREATE POLICY "Clients can create bookings"
  ON bookings FOR INSERT
  WITH CHECK (auth.uid() = client_id);

CREATE POLICY "Clients can cancel their pending bookings"
  ON bookings FOR UPDATE
  USING (auth.uid() = client_id AND status = 'pending')
  WITH CHECK (auth.uid() = client_id AND NEW.status = 'cancelled');