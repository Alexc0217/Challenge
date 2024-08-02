require 'rails_helper'
require 'ffaker'

describe Company do
  context "relationship" do
    it "should have many employees" do
      is_expected.to have_many(:employees).dependent(:destroy)
    end
  end

  context "validations" do
    it "should have a name and the name needs to be unique" do
      is_expected.to validate_presence_of(:name)
      is_expected.to validate_uniqueness_of(:name)
    end
  end
end