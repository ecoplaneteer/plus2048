defmodule Plus2048Web.GameChannel do
  use Phoenix.Channel
  alias Plus2048.GameServer

  @init "game:init"
  @moved "game:moved"
  @voting "game:voting"
  @restarted "game:restarted"
  @game_mode_changed "game:game_mode_changed"

  def join("game:2048", _message, socket) do
    send(self(), :after_join)
    {:ok, socket}
  end

  def handle_info(:after_join, socket) do
    game_state = GameServer.peek()
    push(socket, @init, game_state)
    {:noreply, socket}
  end

  def handle_info({:next_turn, game_state}, socket) do
    broadcast!(socket, @moved, game_state)
    {:noreply, socket}
  end

  def handle_in("move:" <> direction, _message, socket) do
    game_state =
      direction
      |> String.to_existing_atom()
      |> GameServer.move()

    case game_state.game_mode do
      :democracy -> broadcast!(socket, @voting, game_state)
      :anarchy -> broadcast!(socket, @moved, game_state)
    end

    {:noreply, socket}
  end

  def handle_in("restart_game", %{"game_mode" => game_mode}, socket) do
    new_game_state =
      game_mode
      |> String.to_existing_atom()
      |> GameServer.restart()

    broadcast!(socket, @restarted, new_game_state)
    {:noreply, socket}
  end

  def handle_in("toggle_game_mode", %{"game_mode" => game_mode}, socket) do
    new_game_state =
      game_mode
      |> String.to_existing_atom()
      |> GameServer.toggle_game_mode()

    broadcast!(socket, @game_mode_changed, new_game_state)
    {:noreply, socket}
  end
end
