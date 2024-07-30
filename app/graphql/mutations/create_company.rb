class Mutations::CreateCompany < Mutations::BaseMutation
  
  argument :name, String, required: true

  field :company, Types::CompanyType, null: true
  field :errors, [String], null: false

  def resolve(name:)
    company = Company.new(name: name)

    if company.save
      {
        company: company, 
        errors: []
      }
    else
      {
        errors: company.errors.full_messages,
      }
    end

  end
end