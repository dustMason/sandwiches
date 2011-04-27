require 'test_helper'

class UsersControllerTest < ActionController::TestCase

  test "show" do
    u = User.make
    get :show, :id => u.login
    assert_redirected_to new_user_session_path
    sign_in!
    get :show, :id => u.login
    assert_response :success
    u.posts.make
    get :show, :id => u.login
    assert_response :success
  end

  test "new" do
    get :new, :invitation => Invitation.make.code
    assert_response :success
  end

  test "new with bad invite" do
    get :new, :invitation => 'invalid'
    assert_redirected_to root_path
  end

  # TODO fix test
  # test "new signs user out if signed in user tries to access" do
  #   sign_in!
  #   assert @controller.current_user.present?
  #   get :new
  #   assert @controller.current_user.blank?
  # end

  test "create" do
    u0 = User.make
    u1 = User.make
    i = Invitation.make(:user => u1, :email => 'test@example.com')
    # follows
    assert_equal 2, User.count
    # sign up
    assert_difference 'User.count' do
      post :create, :user => {:invitation => i.code, :email => i.email, :login => 'test', :password => 'test', :password_confirmation => 'test'}
      assert_redirected_to root_path
    end
    i.reload
    u2 = User.last
    # invitation
    assert_equal nil, i.code
    assert_equal u2, i.new_user
    assert_equal i.user, u2.inviter
    assert i.redeemed_at.present?
    # sign in and redirect
    # assert @controller.signed_in?(:user) # TODO fix test
    assert_redirected_to root_path
  end

end
