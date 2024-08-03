require 'rails_helper'

module Mutations
  module Employees
    RSpec.describe DeleteEmployee, type: :request do
      describe '.resolve' do
        it 'Deletes an employee' do
          employee = create(:employee)
          
          expect do
            post '/graphql', params: { query: query(
                id: employee.id
              )
            }
          end.to change {Employee.count}.by(-1)
        end
      end
      
      def query(id:)
        <<~GQL
          mutation{
            deleteEmployee(input: {id: #{id}}){
              employee{
                id
                name
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