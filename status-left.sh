#!/bin/bash

APP=$(
	osascript <<EOD
	tell application "System Events"
		get short name of application processes whose frontmost is true and visible is true
	end tell
EOD
)

echo $(
  cat <<-EOF
{
  "app":  "${APP}"
}
EOF
)