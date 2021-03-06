class Map < ApplicationRecord

	validates :address, presence: true
	validates :name, presence: true

	geocoded_by :address
    after_validation :geocode, if: :address_changed?

end