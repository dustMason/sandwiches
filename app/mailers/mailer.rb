class Mailer < ActionMailer::Base
  default :from => CONFIG['mailer']

  def invitation(invitation)
    @invitation = invitation
    mail(:to => invitation.email, :subject => "Sandwiches")
  end

end
