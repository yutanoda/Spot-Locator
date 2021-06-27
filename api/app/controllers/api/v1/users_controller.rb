class Api::V1::UsersController < ApplicationController
  protect_from_forgery

  def index
    render json: { status: 'SUCCESS', message: 'Loaded the post', data: '一覧' }
  end

  def sign_up 
    
    token = 'token' #hash化する必要がある。hash→db 素→jsonに入れて返す
    
    if params[:email]
      temp_code = 1234 
      #要番号メールの送信
      user = User.new(email: params[:email], temp_number_digest: temp_code, password: 'kari')
  
      if user.save 
        render status: 200, json: { id: user.id }
      else
        render json: { status: 400, message: 'The registration failed!' }
      end

    elsif params[:code] 
      user = User.find(params[:userId])
      
      if  params[:code] == user.temp_number_digest
        render status: 200, json: { code: params[:code] }
      else 
        render json: { status: 401, message: 'The code doesnt match' }
      end

    elsif params[:name] && params[:password]
      user = User.find(params[:userId])
      token = 'token'
      user.remember
      if user.update(name: params[:name], password: params[:password], activated: true)
        render status: 200, json: { toke: user.remember_token }
      else
        render json: { status: 400, message: 'The registration failed!' }
      end
    end

  end
end
