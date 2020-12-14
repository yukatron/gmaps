class Map < ApplicationRecord

	validates :address, presence: true
	validates :name, presence: true

end
