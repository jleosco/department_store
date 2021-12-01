class ItemsController < ApplicationController
  before_action :set_dept, except: [:showall]
  before_action :set_item, only: [:show, :edit, :update, :destroy]


  def index
    render component: "Items", props: { depts: @dept, items: @dept.items }
  end

  def show
    render component: "Item", props: { items: @item }
  end

  def destroy
    @item.destroy
    redirect_to departments_items_path(@dept.id)
  end
  
  def new
    render component: "New Item", props: {dept: @dept}
  end
  
  def create
    @item = @dept.item.new(item_params)
    if(@item.save)
      redirect_to [@dept,@item]
    else
    end
  end

  def edit
    render component: "Edit Item", props: {dept: @dept, item: @item}
  end

  def update
    if(@item.update(item_params))
      redirect_to [@dept,@item]
    else
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :description, :price)
  end

  def set_dept
    @dept = Department.find(params[:department_id])
  end

  def set_item
    @item = @dept.items.find(params[:id])
  end

end
