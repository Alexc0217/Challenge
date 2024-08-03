require 'rails_helper'

module Mutations
  module Employees
    RSpec.describe CreateEmployee, type: :request do
      describe '.resolve' do
        it 'Creates an employee' do
          company = create(:company)
    
          expect do
            post '/graphql', params: { query: query(
              name: FFaker::Name.name, 
              email: FFaker::Internet.email, 
              role: FFaker::Company.position, 
              company_id: company.id
              )
            }
          end.to change {Employee.count}.by(1)
        end

        it 'Returns an employee' do
          company = create(:company)
          name = FFaker::Name.name
          email = FFaker::Internet.email
          role = FFaker::Company.position

          post '/graphql', params: { query: query(
            name: name, 
            email: email, 
            role: role, 
            company_id: company.id
            )
          }

          json = JSON.parse(response.body)
          data = json['data']['createEmployee']

          expect(data["errors"]).to be_empty

          expect(data["employee"]).to include(
            'id' => be_present,
            'name' => name,
            'email' => email,
            'role' => role,
            'companyId' => company.id
          )
        end
      end
      
      
      def query(name:, email:, role:, company_id:)
        <<~GQL
          mutation{
            createEmployee(input: {name: "#{name}", email: "#{email}", role: "#{role}", companyId: #{company_id}}){
              employee{
                id
                name
                email
                role
                companyId
              }
              message
              errors
            }
          }
        GQL
      end
    end
  end
end