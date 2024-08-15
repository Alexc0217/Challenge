class Mutations::CreateCompany < Mutations::BaseMutation
  
  argument :name, String, required: true
  argument :logo, ApolloUploadServer::Upload, required: false

  field :company, Types::CompanyType, null: true
  field :errors, [String], null: true
  field :message, String, null: true

  def resolve(name:)
    use_case = Companies::CreateCompanyUseCase.new(name)

    result = use_case.call

    result
  end
end