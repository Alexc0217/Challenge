module Companies
  class CreateCompanyUseCase 
    def initialize(name)
      @name = name
    end

    def call
      company = Company.new(name: @name)

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
end