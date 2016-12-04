require 'test_helper'

class HikersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @hiker = hikers(:one)
  end

  test "should get index" do
    get hikers_url
    assert_response :success
  end

  test "should get new" do
    get new_hiker_url
    assert_response :success
  end

  test "should create hiker" do
    assert_difference('Hiker.count') do
      post hikers_url, params: { hiker: { age: @hiker.age, image: @hiker.image, name: @hiker.name, nationality: @hiker.nationality } }
    end

    assert_redirected_to hiker_url(Hiker.last)
  end

  test "should show hiker" do
    get hiker_url(@hiker)
    assert_response :success
  end

  test "should get edit" do
    get edit_hiker_url(@hiker)
    assert_response :success
  end

  test "should update hiker" do
    patch hiker_url(@hiker), params: { hiker: { age: @hiker.age, image: @hiker.image, name: @hiker.name, nationality: @hiker.nationality } }
    assert_redirected_to hiker_url(@hiker)
  end

  test "should destroy hiker" do
    assert_difference('Hiker.count', -1) do
      delete hiker_url(@hiker)
    end

    assert_redirected_to hikers_url
  end
end
