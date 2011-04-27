xml.instruct! :xml, :version => "1.0"
xml.rss :version => "2.0" do
  xml.channel do
    xml.title CONFIG['app_name']
    xml.link CONFIG['domain']
    for sandwich in @sandwiches
      xml.item do
        xml.title sandwich.to_s
        xml.author(sandwich.user)
        xml.pubDate sandwich.created_at.utc.to_s(:rfc822)
        xml.link CONFIG['domain']
        xml.guid "#{CONFIG['domain']}/#{sandwich.id}"
      end
    end
  end if @sandwiches
end