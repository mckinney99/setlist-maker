class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  devise :omniauthable, omniauth_providers: %i[facebook]

  has_many :setlists
  has_many :songs

  def self.from_omniauth(auth)
    if user = User.where(email: auth['info']['email']).first
      user
    else
      where(provider: auth.provider, uid: auth.uid).first_or_create do |u|
        u.email = auth.info.email
        u.password = Devise.friendly_token[0, 20]
      end
    end
  end
end
