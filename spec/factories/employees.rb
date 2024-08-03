require 'ffaker'

FactoryBot.define do
  factory :employee do
    name { FFaker::Name.name }
    email { FFaker::Internet.email }
    role { FFaker::Company.position }

    association :company
  end
end