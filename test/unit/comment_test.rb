require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  
  test "make" do
    c = Comment.make
    assert c.valid?
  end
  
  test "cant make an empty comment" do
    c = Comment.new
    assert_equal false, c.valid?
    assert c.errors[:text]
  end  
  
end
