class Map < ApplicationRecord

	validates :address, presence: true
	validates :name, presence: true
	validates :longitude, presence: true
	validates :latitude, presence: true

	geocoded_by :address
    after_validation :geocode, if: :address_changed?

end