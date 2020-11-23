defmodule Plus2048Web.PageController do
  use Plus2048Web, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
