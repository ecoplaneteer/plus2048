#! /bin/bash
mix deps.get
mix ecto.setup
mix phx.gen.context Messages Message messages user:string body:string 
mix ecto.migrate
mix phx.server