FROM mcr.microsoft.com/devcontainers/python:1-3.12-bookworm

# Set the timezone
ENV TZ=Europe/Rome
RUN ln -fs /usr/share/zoneinfo/$TZ /etc/localtime && dpkg-reconfigure -f noninteractive tzdata

# Install dependencies
RUN apt-get install -y --no-install-recommends curl bash ca-certificates \
    && rm -rf /var/lib/apt/lists/* \
    && rm -f /etc/apt/sources.list.d/yarn.list /etc/apt/sources.list.d/yarn*.list

RUN mkdir -p /home/vscode/.vscode-server-insiders/data/User/globalStorage/rooveterinaryinc.roo-cline/settings \
    && chown -R vscode:vscode /home/vscode/.vscode-server-insiders
