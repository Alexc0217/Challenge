module Chart
  extend ActiveSupport::Concern

  included do 
    def pairs
      company.employees.where(manager_id: self.manager_id)
    end
  
    def managed_by_manager 
      build_hierarchy(self)
    end
  
    def second_level_subordinates
      second_level = []
      
      subordinates.each do |subordinate|
        second_level.concat(subordinate.subordinates)
      end
  
      second_level
    end
  end


  private 

  def build_hierarchy(employee)
    {
      employee: employee,
      subordinates: employee.subordinates.map { |subordinate| build_hierarchy(subordinate) }
    }
  end

end