class Mutations::CreateCompany < Mutations::BaseMutation
  
  argument :name, String, required: true
  argument :logo, ApolloUploadServer::Upload, required: false

  field :company, Types::CompanyType, null: true
  field :errors, [String], null: false

  def resolve(name:)
    company = Company.new(name: name)

    if company.save
      {
        company: company, 
        errors: [],
        message: "Empresa criada com sucesso."
      }
    else
      {
        errors: company.errors.full_messages
      }
    end

  end
end