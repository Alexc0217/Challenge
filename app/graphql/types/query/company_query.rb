module Types
  module Query
    module CompanyQuery
      extend ActiveSupport::Concern

      included do
        field :companies, [Types::CompanyType], null: false, description: "Get all companies"

        def companies
          Company.all
        end
    
        field :company, Types::CompanyType, null: false, description: "Get a company by id" do 
          argument :id, GraphQL::Types::ID, required: true
        end
    
        def company(id:)
          Company.find id
        end
      end
    end
  end
end