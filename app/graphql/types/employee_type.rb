module Types
  class EmployeeType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :email, String, null: false
    field :role, String
    field :manager_id, Integer
    field :company_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :subordinates, [Types::EmployeeType], null: true
    field :pairs, [Types::EmployeeType], null: true

    def subordinates
      object.subordinates
    end

    def pairs
      object.pairs
    end

  end
end
