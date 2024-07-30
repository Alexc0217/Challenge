class Company < ApplicationRecord
  has_many :employees, dependent: :destroy, foreign_key: "company_id"
  validates :name, uniqueness: true
end