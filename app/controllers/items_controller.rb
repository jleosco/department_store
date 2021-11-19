class ItemsController < ApplicationController
  before_action :set_dept
  before_action :set_item, only [:show, :edit, :update, :destroy]


  def index
    render component: "Items", props: { dept: @dept items: @item}
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
