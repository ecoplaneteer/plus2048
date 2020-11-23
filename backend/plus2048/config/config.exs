# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :plus2048,
  ecto_repos: [Plus2048.Repo]

# Configures the endpoint
config :plus2048, Plus2048Web.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "bNYo2SrqUsKPeiyw9GmCI9JhlVx5K+W16Y+qVeYl22jccm11t95UynDKLTzijr8/",
  render_errors: [view: Plus2048Web.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Plus2048.PubSub,
  live_view: [signing_salt: "Tyh/L7bq"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
