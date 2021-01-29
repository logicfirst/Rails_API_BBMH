class Ailment < ApplicationRecord
    has_many :patients
    has_many :doctors
    has_many :appointments
end
