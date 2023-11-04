.PHONY: help

help:
	@echo "Usage: make [target]"
	@echo ""
	@awk -F ':.*?## ' '/^[%a-zA-Z0-9_-]+:.*?## / { printf "  %-20s %s\n", $$1, $$2 }' $(MAKEFILE_LIST)
	@echo ""
