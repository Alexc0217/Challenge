class Employee < ApplicationRecord
  include Chart

  validate :validate_parents
  validate :different_company

  belongs_to :company, foreign_key: "company_id"
  belongs_to :manager, class_name: "Employee", optional: true
  has_many :subordinates, class_name: "Employee", foreign_key: 'manager_id'

  def parents
    parents = []
    current_employee = self

    while current_employee.manager
      parents << current_employee.manager
      current_employee = current_employee.manager
    end

    parents
  end

  def all_children 
    children = []
    
    subordinates.each do |subordinate|
      children << subordinate
      children.concat(subordinate.all_children)
    end

    children
  end

  private 

  def validate_parents
    if parents.collect(&:id).include?(self.id)
      errors.add(:manager, "A subordinate cannot manage someone who is above him.")
    end
  end

  def different_company
    manager = Employee.find manager_id
    
    if self.company_id != manager.company_id
      errors.add(:manager, "The subordinate needs to be the same company.")
    end
  end

end