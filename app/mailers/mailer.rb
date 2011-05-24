class Mailer < ActionMailer::Base
  default :from => CONFIG['mailer']

  def invitation(invitation)
    @invitation = invitation
    mail(:to => invitation.email, :subject => "Sandwiches")
  end
  
  def liked(user,sandwich)
    @sandwich = sandwich
    @user = user
    mail(:to => @sandwich.user.email, :subject => "Sandwiches: #{@user.login} likes your sandwich")
  end
  
  def commented(user,comment)
    @user = user
    @comment = comment
    @sandwich = comment.sandwich
    mail(:to => @sandwich.user.email, :subject => "Sandwiches: #{@user.login} commented on your sandwich")
  end

end
