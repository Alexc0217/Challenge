require 'rails_helper'

describe Employee do
  context "relationship" do
    it "is valid when a employee belongs to a company" do
      is_expected.to belong_to :company
    end
  end
  
  context "validations" do 
    it "is valid when the name and email is not null" do 
      is_expected.to validate_presence_of :name
      is_expected.to validate_presence_of :email
    end  
  end
  
end