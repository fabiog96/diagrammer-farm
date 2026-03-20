# ── Claude Code ──────────────────────────────────────────────
echo "Installing Claude Code..."
npm install -g @anthropic-ai/claude-code

# Initialize D-Bus and gnome-keyring for credential storage (headless Linux)
# This allows `claude login` to persist OAuth tokens via libsecret
if ! pgrep -x "dbus-daemon" > /dev/null 2>&1; then
  eval "$(dbus-launch --sh-syntax)"
  echo "export DBUS_SESSION_BUS_ADDRESS=$DBUS_SESSION_BUS_ADDRESS" >> /home/vscode/.bashrc
fi

echo "" | gnome-keyring-daemon --unlock --components=secrets 2>/dev/null || true
echo "Claude Code installed. Run 'claude login' once to authenticate via OAuth."
# ─────────────────────────────────────────────────────────────
