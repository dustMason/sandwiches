require 'test_helper'

class SandwichesControllerTest < ActionController::TestCase
  
  test "should get index" do
    get :index
    assert_redirected_to new_user_session_path
    sign_in!
    get :index
    assert_response :success
  end

  test "should get new" do    
    get :new
    assert_redirected_to new_user_session_path
    sign_in!
    get :new
    assert_response :success
  end

  test "should create a new sandwich with 3 identical songs" do
    sign_in!
    assert_difference('Sandwich.count') do
      post :create, :songs => {
        1 => fixture_file_upload('files/audio.mp3', 'audio/mpeg'),
        2 => fixture_file_upload('files/audio.mp3', 'audio/mpeg'),
        3 => fixture_file_upload('files/audio.mp3', 'audio/mpeg')
      }, :name => "Pastrami on Rye"
    end
    assert_redirected_to root_path
    r = Sandwich.last
    assert_equal 3, r.posts.count
    assert_equal "Pastrami on Rye", r.name
    r.posts.each { |post| 
      assert post.mp3 != 'audio.mp3' # check for random file name
      assert_equal 'The Love Song of J. Alfred Prufrock', post.title
      assert_equal 'T.S. Eliot', post.artist
      assert_equal 'Prufrock and Other Observations', post.album
    }
  end
  
  test "create fails gracefully" do
    sign_in!
    assert_no_difference 'Sandwich.count' do
      post :create, :songs => {}
    end
    assert_response :success
  end
  
  test "should not allow a sandwich with less than 3 songs" do
    sign_in!
    assert_no_difference 'Sandwich.count' do
      post :create, :songs => {
        1 => fixture_file_upload('files/audio.mp3', 'audio/mpeg')
      }, :name => "Pastrami on Rye"
    end
    assert_response :success
  end
  
  test "should not allow any non mp3 or m4a files in a sandwich" do
    sign_in!
    assert_no_difference 'Sandwich.count' do
      post :create, :songs => {
        1 => fixture_file_upload('files/audio.wma', 'audio/x-ms-wma'),
        2 => fixture_file_upload('files/audio.wma', 'audio/x-ms-wma'),
        3 => fixture_file_upload('files/audio.wma', 'audio/x-ms-wma')
      }, :name => "Pastrami on Rye"
    end
    assert_response :success
  end

end
