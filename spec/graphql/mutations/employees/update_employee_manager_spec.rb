require 'rails_helper'

module Mutations
  module Employees
    RSpec.describe UpdateEmployeeManager, type: :request do
      describe '.resolve' do
        it 'Update the manager of an employee from different companies' do
          employee = create(:employee)
          manager = create(:employee)
    
          post '/graphql', params: { query: query(
              employee_id: employee.id,
              manager_id: manager.id
            )
          }

          json = JSON.parse(response.body)
          data = json['data']['updateEmployeeManager']

          expect(data).to include(
            'employee' => nil,
          )

          expect(data["errors"]).not_to be_empty
        end

        it 'Update the manager of an employee from the same company' do
          company = create(:company)
          employee = create(:employee, company: company)
          manager = create(:employee, company: company)
    
          post '/graphql', params: { query: query(
              employee_id: employee.id,
              manager_id: manager.id
            )
          }

          json = JSON.parse(response.body)
          data = json['data']['updateEmployeeManager']

          expect(data["employee"]).to include(
            'managerId' => manager.id,
          )
        end
      end
      
      
      def query(employee_id:, manager_id:)
        <<~GQL
          mutation {
            updateEmployeeManager(input: {employeeId: #{employee_id}, managerId: #{manager_id}}) {
              employee{
                name
                id
                managerId
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