class Mutations::CreateCompany < Mutations::BaseMutation
  
  argument :name, String, required: true
  argument :logo, ApolloUploadServer::Upload, required: false

  field :company, Types::CompanyType, null: true
  field :errors, [String], null: true
  field :message, String, null: true

  def resolve(name:)
    company = Company.new(name: name)

    if company.save
      {
        company: company, 
        message: I18n.t("graph_ql.mutations.create_company.success")
      }
    else
      {
        errors: company.errors.full_messages,
      }
    end

  end
end