require 'rails_helper'

module Mutations
  module Companies
    RSpec.describe CreateCompany, type: :request do
      describe '.resolve' do
        it 'Creates a company' do    
          expect do
            post '/graphql', params: { query: query(
                name: FFaker::Company.name
              )
            }
          end.to change {Company.count}.by(1)
        end

        it 'Returns a company' do
          name = FFaker::Company.name

          post '/graphql', params: { query: query(
              name: name, 
            )
          }

          json = JSON.parse(response.body)
          data = json['data']['createCompany']

          expect(data["errors"]).to be_empty

          expect(data["company"]).to include(
            'id' => be_present,
            'name' => name,
          )
        end
      end
      
      
      def query(name:)
        <<~GQL
          mutation{
            createCompany(input: {name: "#{name}"}){
              company{
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