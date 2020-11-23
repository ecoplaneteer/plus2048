defmodule Plus2048Web.ChatChannel do
  use Plus2048Web, :channel
  alias Plus2048.Messages

  @chat_init "chat:init"
  @new_msg "chat:new_msg"

  def join("chat:2048", _message, socket) do
    send(self(), :after_join)
    {:ok, socket}
  end

  def handle_info(:after_join, socket) do
    messages =
      Messages.list_messages()
      |> Enum.map(fn message ->
      %{
        user: message.user,
        body: message.body,
      }
    end)
    push(socket, @chat_init, %{messages: messages})
    {:noreply, socket}
  end

  def handle_in("chat:new_msg", %{"body" => message}, socket) do
    Messages.create_message(%{
      user: socket.assigns.username,
      body: message,
    })

    broadcast!(socket, @new_msg, %{
      user: socket.assigns.username,
      body: message,
    })

    {:noreply, socket}
  end
end
