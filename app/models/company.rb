class Company < ApplicationRecord
  has_one_attached :logo

  has_many :employees, dependent: :destroy, foreign_key: "company_id"
  validates :name, uniqueness: true, presence: true
  
end