module Employees
  class UpdateEmployeeManagerUseCase
    def initialize(employee_id, manager_id)
      @employee_id = employee_id
      @manager_id = manager_id
    end
    
    def call
      employee = Employee.find @employee_id
      manager = Employee.find @manager_id
      
      employee.manager_id = manager.id
  
      if employee.save
        {
          employee: employee,
          message: I18n.t("graph_ql.mutations.update_employee_manager.success", employee_name: employee.name, manager_name: manager.name),
        }
      else
        {
          errors: employee.errors.full_messages
        }
      end
  
    end
  end
end