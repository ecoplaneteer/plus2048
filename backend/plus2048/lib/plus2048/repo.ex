defmodule Plus2048.Repo do
  use Ecto.Repo,
    otp_app: :plus2048,
    adapter: Ecto.Adapters.MyXQL
end
