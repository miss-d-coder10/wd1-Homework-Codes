class HikersController < ApplicationController
  before_action :set_hiker, only: [:show, :edit, :update, :destroy]

  # GET /hikers
  # GET /hikers.json
  def index
    @hikers = Hiker.all
  end

  # GET /hikers/1
  # GET /hikers/1.json
  def show
  end

  # GET /hikers/new
  def new
    @hiker = Hiker.new
  end

  # GET /hikers/1/edit
  def edit
  end

  # POST /hikers
  # POST /hikers.json
  def create
    @hiker = Hiker.new(hiker_params)

    respond_to do |format|
      if @hiker.save
        format.html { redirect_to @hiker, notice: 'Hiker was successfully created.' }
        format.json { render :show, status: :created, location: @hiker }
      else
        format.html { render :new }
        format.json { render json: @hiker.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /hikers/1
  # PATCH/PUT /hikers/1.json
  def update
    respond_to do |format|
      if @hiker.update(hiker_params)
        format.html { redirect_to @hiker, notice: 'Hiker was successfully updated.' }
        format.json { render :show, status: :ok, location: @hiker }
      else
        format.html { render :edit }
        format.json { render json: @hiker.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /hikers/1
  # DELETE /hikers/1.json
  def destroy
    @hiker.destroy
    respond_to do |format|
      format.html { redirect_to hikers_url, notice: 'Hiker was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hiker
      @hiker = Hiker.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def hiker_params
      params.require(:hiker).permit(:name, :image, :nationality, :age, trail_id: [])
    end
end
