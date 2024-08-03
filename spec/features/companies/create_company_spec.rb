require 'rails_helper'

RSpec.describe 'Create Company', type: :feature, js: true do
  before do
    visit 'http://localhost:3001/companies/new'
  end

  it 'create a company successfuly' do
    fill_in 'name', with: FFaker::Company.name
    click_button 'submit'

    expect(page).to have_content(I18n.t("graph_ql.mutations.create_company.success"))
  end
end
