require 'test_helper'

class UserTest < ActiveSupport::TestCase

  test "User.make" do
    assert_difference 'User.count' do
      User.make
    end
  end

  test "is not valid without login" do
    u = User.new
    assert_equal false, u.valid?
    assert u.errors[:login]
  end

  test "is not valid without unique login" do
    User.make(:login => 'test')
    u = User.new(:login => 'test')
    assert_equal false, u.valid?
    assert u.errors[:login]
  end

  test "is not valid with login greater than 15" do
    u = User.new(:login => '1234567890123456')
    assert_equal false, u.valid?
    assert u.errors[:login]
  end

  test "is not valid with login that begins with a number or underscore " do
    u = User.new(:login => '1a'); assert_equal false, u.valid?; assert u.errors[:login]
    u = User.new(:login => '_a'); assert_equal false, u.valid?; assert u.errors[:login]
  end

  test "is not valid with login that's not all letters, numbers, and underscores" do
    u = User.new(:login => '@'); assert_equal false, u.valid?; assert u.errors[:login]
    u = User.new(:login => '!'); assert_equal false, u.valid?; assert u.errors[:login]
    u = User.new(:login => '~'); assert_equal false, u.valid?; assert u.errors[:login]
  end

  test "validates format of email" do
    i = User.new
    i.email = 'with a space'
    assert !i.valid?
    assert i.errors[:email]
    i.email = 'invalid!chars'
    assert !i.valid?
    assert i.errors[:email]
    i.email = 'no_domain'
    assert !i.valid?
    assert i.errors[:email]
  end

  test "validate unique email" do
    u1 = User.make(:email => 'test@example.com')
    assert u1.valid?
    u2 = User.new
    u2.email = 'test@example.com'
    assert !u2.valid?
    assert u2.errors[:email]
  end

  test "has many invitations" do
    u = User.make
    r = Invitation.make(:user => u)
    assert_equal u.invitations, [r]
  end

  test "to_param" do
    u = User.make
    assert_equal u.login, u.to_param
  end

  test "to_s" do
    u = User.make
    assert_equal u.login, u.to_s
  end

end
