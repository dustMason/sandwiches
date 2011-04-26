module ApplicationHelper
  def rss_url
    "#{sandwiches_url(:format => 'rss')}?auth_token=#{current_user.authentication_token}"
  end
end