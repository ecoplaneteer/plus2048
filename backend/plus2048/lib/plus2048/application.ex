defmodule Plus2048.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      Plus2048.Repo,
      # Start the Telemetry supervisor
      Plus2048Web.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: Plus2048.PubSub},
      # Start the Endpoint (http/https)
      Plus2048Web.Endpoint,
      # Start a worker by calling: Plus2048.Worker.start_link(arg)
      # {Plus2048.Worker, arg}
      Tty2048.Game,
      Plus2048.GameServer
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Plus2048.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    Plus2048Web.Endpoint.config_change(changed, removed)
    :ok
  end
end
