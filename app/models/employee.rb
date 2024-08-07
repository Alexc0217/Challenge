class Employee < ApplicationRecord
  include Chart

  validate :validate_ancestors
  validate :different_company
  validates_uniqueness_of :email
  validates :name, presence: true
  validates :email, presence: true

  has_one_attached :avatar
  
  belongs_to :company, foreign_key: "company_id"
  belongs_to :manager, class_name: "Employee", optional: true
  has_many :subordinates, class_name: "Employee", foreign_key: 'manager_id'

  scope :recent, ->  {
    order(created_at: :desc)
  }

  def ancestors
    ancestors = []
    current_employee = self

    while current_employee.manager
      ancestors << current_employee.manager
      current_employee = current_employee.manager
    end

    ancestors
  end

  private 

  def validate_ancestors
    if ancestors.collect(&:id).include?(self.id)
      errors.add(:manager, "- #{I18n.t("errors.messages.validate_ancestors")}")
    end
  end

  def different_company
    if manager_id
      manager = Employee.find manager_id
      
      if self.company_id != manager.company_id
        errors.add(:manager, "- #{I18n.t("errors.messages.validate_company")}")
      end
    end
  end

end