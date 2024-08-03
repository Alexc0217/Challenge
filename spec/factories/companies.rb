require 'ffaker'

FactoryBot.define do
  factory :company do
    name { FFaker::Company.name }

    after(:create) do |company|
      create_list(:employee, 3, company: company)
    end
  end
end