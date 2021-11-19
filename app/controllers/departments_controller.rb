class DepartmentsController < ApplicationController
  before_action :set_dept, only: [:show, :edit, :update, :destroy]

  def index
   render component: "Departments", props: { departments: Department.all }
  end

  def new
    render component: "NewDept"
  end

  def create
    dept = Department.new(dept_params)
    if (dept.save)
      redirect_to departments_path
    else
    end
  end

  def show
    render component: "Items", props: { depts: @dept, items: @dept.items }
  end

  def edit
    render component: "EditDept", props: { dept: @dept}
  end

  def update
    if (@dept.update(dept_params))
      redirect_to departments_path
    else
    end
  end

  def destroy
    @dept.destroy
      redirect_to departments_path
  end


  private

  def dept_params
    params.require(:department).permit(:name)
  end

  def set_dept
    @dept = Department.find(params[:id])
  end
end
